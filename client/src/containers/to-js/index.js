/**
 * Created by mac on 16/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */
import React from 'react'
import {Iterable} from 'immutable';
import hoistNonReactStatics from 'hoist-non-react-statics';

export const toJS = WrappedComponent => {
    class FlatObject extends React.Component {

        render() {

            const KEY = 0;
            const VALUE = 1;

            const propsJS = (
                Object
                    .entries(this.props)
                    .reduce((newProps, wrappedComponentProp) => {
                        newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(wrappedComponentProp[VALUE])
                            ?
                            wrappedComponentProp[VALUE].toJS()
                            :
                            wrappedComponentProp[VALUE];
                        return newProps
                    }, {})
            );

            return <WrappedComponent {...propsJS} />;
        }
    }

    return hoistNonReactStatics(FlatObject, WrappedComponent);
};