/*** Created by Gareth on 14/11/2017. ***/
import React from 'react';
import OrderQuantities from '../components/SensorParameters';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

describe('OrderQuantities', () => {
    it('renders without crashing', () => {
        shallow(<OrderQuantities/>)
    });

    it('Renders correctly', () =>{
        const orderQuantities = renderer.create(<OrderQuantities/>).toJSON();
        expect(orderQuantities).toMatchSnapshot();
    });

    it('Collapses data displayed on button click', function () {
        const orderQuantities = mount(<OrderQuantities/>);
        orderQuantities.find('button').simulate('click');
        expect(orderQuantities.state('show')).toEqual('no');
    });

});
