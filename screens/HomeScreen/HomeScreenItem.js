import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeScreenItem = ({ data, type }) => {
    let image
    if (type == 0) image = require("../../assets/temperature.png")
    if (type == 1) image = require("../../assets/light.png")
    if (type == 2) image = require("../../assets/humidity.png")
    if (type == 3) image = require("../../assets/ph.jpg")
    if (type == 4) image = require("../../assets/oxy.png")
    return (
        <View style={{
            width: '100%',
            borderRadius: 5,
            borderStyle: 'solid',
            borderWidth: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 60, height: 60 }}
                        source={image}
                    />
                </View>
                <Text style={{ textAlign: 'center' }}>{data.title}</Text>
                <Text style={{ textAlign: 'center', padding: 5, backgroundColor: '#c7eed4' }}>{data.value}</Text>
            </View>
        </View>
    )
}

export default HomeScreenItem