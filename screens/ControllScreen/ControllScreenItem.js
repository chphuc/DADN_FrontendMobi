import { useState } from 'react'
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'

const ControllScreenItem = ({ isSetting, data, setDataPost }) => {
    const [valueSlider, setValueSlider] = useState(data.curValue)
    const handleChangeValueSlider = (value) => {
        setValueSlider(value)
        setDataPost(prev => ({ ...prev, curValue: value }))
    }
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16 }}>{data.title}</Text>
                <Text style={{ fontSize: 16, marginLeft: 5, padding: 5, backgroundColor: '#9bb0d4', borderRadius: 5 }}>{valueSlider}</Text>
            </View>
            <View>
                <Slider
                    style={{ width: '100%', height: 60 }}
                    minimumValue={data.minValue}
                    maximumValue={data.maxValue}
                    value={valueSlider}
                    step={1}
                    minimumTrackTintColor="#49e680"
                    maximumTrackTintColor="#000000"
                    onValueChange={(e) => handleChangeValueSlider(e)}
                    disabled={!isSetting}
                />
            </View>
        </View>
    )
}

export default ControllScreenItem