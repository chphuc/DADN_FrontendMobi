import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HomeScreenItem from './HomeScreenItem'
import HomeScreenChart from './HomeScreenChart'

const HomeScreen = ({ temperatureData, luxData, humidityData }) => {

    const n = 6
    const temperaturelabel = temperatureData?.label.slice(-n)
    const temperaturedata = temperatureData?.data.map(item => +item).slice(-n)
    const luxlabel = luxData?.label.slice(-n)
    const luxdata = luxData?.data.map(item => +item).slice(-n)
    const humiditylabel = humidityData?.label.slice(-n)
    const humiditydata = humidityData?.data.map(item => +item).slice(-n)

    const data = [
        {
            title: "Temperature",
            value: temperatureData?.value,
            data: {
                labels: temperaturelabel,
                datasets: [
                    {
                        data: temperaturedata,
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2, // optional
                    }
                ],
                legend: ["Temperature"] // optional
            }
        },
        {
            title: "Light",
            value: luxData?.value || 0,
            data: {
                labels: luxlabel,
                datasets: [
                    {
                        data: luxdata,
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2 // optional
                    }
                ],
                legend: ["Light"] // optional
            }
        },
        {
            title: "Humidity",
            value: humidityData?.value || 0,
            data: {
                labels: humiditylabel,
                datasets: [
                    {
                        data: humiditydata,
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2 // optional
                    }
                ],
                legend: ["Humidity"] // optional
            }
        }
    ]
    const [dataChart, setDataChart] = useState()
    const handlePressItem = (index) => {
        setDataChart(data[index].data)
    }

    return (
        <View style={{ paddingHorizontal: 10 }}>
            {
                !temperatureData && !luxData && !humidityData ?
                    <View>
                        <Text>Loading ...</Text>
                    </View>
                    :
                    <View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            rowGap: 10,
                            columnGap: 10
                        }}>
                            {
                                data.map((item, index) => (
                                    <TouchableOpacity
                                        style={{
                                            width: '30%',
                                        }}
                                        key={index} onPress={() => handlePressItem(index)}
                                    >
                                        <HomeScreenItem data={item} type={index} />
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <HomeScreenChart data={dataChart} />
                        </View>
                    </View>
            }
        </View>
    )
}

export default HomeScreen