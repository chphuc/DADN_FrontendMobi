import { View, Text, Button } from 'react-native'
import { useState } from 'react'
import ControllScreenItem from './ControllScreenItem'

const ControllScreen = () => {
    const data = [
        {
            title: 'Temperature',
            minValue: 0,
            maxValue: 100,
            curValue: 60,
            calculationUnit: '℃',
            isOpen: true
        },
        {
            title: 'Light',
            minValue: 0,
            maxValue: 100,
            curValue: 50,
            calculationUnit: 'Lux',
            isOpen: true
        },
        {
            title: 'Humidity',
            minValue: 0,
            maxValue: 100,
            curValue: 30,
            calculationUnit: '%',
            isOpen: true
        },
        {
            title: 'PH concentration',
            minValue: 0,
            maxValue: 100,
            curValue: 30,
            calculationUnit: '%',
            isOpen: true
        },
        {
            title: 'Oxygen concentration',
            minValue: 0,
            maxValue: 100,
            curValue: 30,
            calculationUnit: '%',
            isOpen: true
        }
    ]
    const [isSetting, setIsSetting] = useState(false)
    const onPressSetting = () => {
        setIsSetting((prev) => (!prev))
    }

    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    onPress={onPressSetting}
                    title={isSetting ? "Update" : "Setting"}
                    color={isSetting ? "#6cc429" : "#000"}
                />
            </View>
            <View>
                {data.map((item, index) => (
                    <View key={index}>
                        <ControllScreenItem isSetting={isSetting} data={item} />
                    </View>
                ))}
            </View>
        </View>
    )
}

export default ControllScreen