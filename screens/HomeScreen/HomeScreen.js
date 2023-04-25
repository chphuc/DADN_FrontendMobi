import { useState, useEffect } from 'react'
import { View, TouchableOpacity, fetch } from 'react-native'
import HomeScreenItem from './HomeScreenItem'
import HomeScreenChart from './HomeScreenChart'

const HomeScreen = () => {
    const data = [
        {
            title: "Temperature",
            value: 28,
            data: {
                labels: ["18:00", "18:05", "18:10", "18:15", "18:20", "18:25"],
                datasets: [
                    {
                        data: [25, 26, 24, 24, 26, 28],
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2, // optional
                    }
                ],
                legend: ["Temperature"] // optional
            }
        },
        {
            title: "Light",
            value: 115,
            data: {
                labels: ["18:00", "18:05", "18:10", "18:15", "18:20", "18:25"],
                datasets: [
                    {
                        data: [125, 120, 115, 117, 119, 115],
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2 // optional
                    }
                ],
                legend: ["Light"] // optional
            }
        },
        {
            title: "Humidity",
            value: 78,
            data: {
                labels: ["18:00", "18:05", "18:10", "18:15", "18:20", "18:25"],
                datasets: [
                    {
                        data: [80, 78, 75, 78, 79, 78],
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2 // optional
                    }
                ],
                legend: ["Humidity"] // optional
            }
        },
        {
            title: "PH",
            value: 66,
            data: {
                labels: ["18:00", "18:05", "18:10", "18:15", "18:20", "18:25"],
                datasets: [
                    {
                        data: [62, 60, 65, 68, 67, 66],
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2 // optional
                    }
                ],
                legend: ["PH"] // optional
            }
        },
        {
            title: "Oxy",
            value: 80,
            data: {
                labels: ["18:00", "18:05", "18:10", "18:15", "18:20", "18:25"],
                datasets: [
                    {
                        data: [80, 82, 86, 85, 83, 80],
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                        strokeWidth: 2 // optional
                    }
                ],
                legend: ["Oxy"] // optional
            }
        },
    ]
    const [dataChart, setDataChart] = useState(data[0].data)
    const handlePressItem = (index) => {
        setDataChart(data[index].data)
    }

    const fetchAPI = async () => {

    }

    useEffect(() => {
    }, []);

    return (
        <View style={{ paddingHorizontal: 10 }}>
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
    )
}

export default HomeScreen