import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import ReactSlider from '@react-native-community/slider';

export const Container = styled(LinearGradient).attrs({
    colors: ['#08bdc0', '#1E54E1'],
    start: { x: 0, y: 0},
    end: { x: 1, y: 1}
})`
    flex: 1;
    justify-content: center;    
    align-items: center;
    padding: 32px;
`;

export const Form = styled.View`
    margin: 32px;
    width: 100%;
`;

export const FormRow = styled.View`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${({ last }) => last ? '16px' : '0px'};
`

export const FormRowText = styled.Text`
    color: #fff;
    font-size: 16px;
`

export const Switch = styled.Switch.attrs({
    trackColor: {
        false: '#ec0d0ddc', 
        true: '#0ac448', 
        // true: '#fff' 
    },
    thumbColor: '#7acaff'
})``

export const Slider = styled(ReactSlider).attrs({
    minimumValue: 1,
    maximumValue: 20,
    minimumTrackTintColor: "#ffffff",
    maximumTrackTintColor: "#000000",
    step: 1,
    thumbTintColor: '#fff'
})`
    width: 100%;
`

export const GenerateButton = styled.TouchableOpacity`
    padding: 16px;
    border-radius: 8px;
    background:#14358a;
    align-items: center;
`;

export const GenerateButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const Result = styled.TouchableOpacity`
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    width: 100%;
    align-items: center;
`;

export const ResultText = styled.Text`
    font-size: 16px;
    color: #000;
`;