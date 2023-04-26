import { View, Text, Button } from 'react-native'
import { useState, useEffect } from 'react'
import ControllScreenItem from './ControllScreenItem'

const ControllScreen = ({ pumpData, oxyData, postPumpData, postOxygenData }) => {
    const [pump, setPump] = useState()
    const [oxy, setOxy] = useState()

    const [isSetting, setIsSetting] = useState(false)
    const onPressSetting = () => {
        setIsSetting((prev) => {
            if (prev) {
                postPumpData(pump.curValue)
                postOxygenData(oxy.curValue)
            }

            return !prev
        })
    }

    useEffect(() => {
        if (pumpData) {
            setPump({
                title: 'Pump',
                minValue: 0,
                maxValue: 4,
                curValue: +pumpData[0].value,
            })
        }
        if (oxyData) {
            setOxy({
                title: 'OxygenPump',
                minValue: 0,
                maxValue: 1,
                curValue: +oxyData[0].value,
            })
        }
    }, [pumpData, oxyData])

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
                {
                    pump && oxy ?
                        <View>
                            <ControllScreenItem isSetting={isSetting} data={pump} setDataPost={setPump} />
                            <ControllScreenItem isSetting={isSetting} data={oxy} setDataPost={setOxy} />
                        </View>
                        :
                        <Text>Loading ...</Text>
                }
            </View>
        </View>
    )
}

export default ControllScreen