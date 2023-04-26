import { useState, useEffect } from 'react'
import { View } from 'react-native'
import Navbar from './Navbar'
import HomeScreen from '../screens/HomeScreen'
import NotificationScreen from '../screens/NotificationScreen'
import ControllScreen from '../screens/ControllScreen'

const DefaultLayout = ({ route }) => {
    const [temperatureData, setTemperatureData] = useState()
    const [luxData, setLuxData] = useState()
    const [humidityData, setHumidityData] = useState()
    const [pumpData, setPumpData] = useState()
    const [oxyData, setOxyData] = useState()
    const [notificationData, setNotificationData] = useState()
    const [thresholdData, setThresholdData] = useState()

    const fetchTemperatureData = async () => {
        return fetch('http://10.0.2.2:4001/devices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'temperature' })
        })
            .then(response => response.json())
            .then(json => {
                setTemperatureData(json)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchLuxData = async () => {
        return fetch('http://10.0.2.2:4001/devices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'lux' })
        })
            .then(response => response.json())
            .then(json => {
                setLuxData(json)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchHumidityData = async () => {
        return fetch('http://10.0.2.2:4001/devices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'humidity' })
        })
            .then(response => response.json())
            .then(json => {
                setHumidityData(json)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchNotificationData = async () => {
        return fetch('http://10.0.2.2:4001/notification')
            .then(response => response.json())
            .then(json => {
                setNotificationData(json)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchThresholdData = async () => {
        return fetch('http://10.0.2.2:4001/threshold')
            .then(response => response.json())
            .then(json => {
                setThresholdData(json)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const postThresholdData = async (type, min, max) => {
        return fetch('http://10.0.2.2:4001/threshold', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type, min, max })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const fetchPumpData = async () => {
        return fetch('http://10.0.2.2:4001/pump')
            .then(response => response.json())
            .then(json => {
                setPumpData(json)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchOxygenPumpData = async () => {
        return fetch('http://10.0.2.2:4001/oxy')
            .then(response => response.json())
            .then(json => {
                setOxyData(json)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const postPumpData = async (value) => {
        return fetch('http://10.0.2.2:4001/pump', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const postOxygenData = async (value) => {
        return fetch('http://10.0.2.2:4001/oxy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchTemperatureData()
        fetchLuxData()
        fetchHumidityData()

        fetchNotificationData()
        fetchThresholdData()

        fetchPumpData()
        fetchOxygenPumpData()
    }, [])

    return (
        <View style={{ paddingTop: 32, paddingHorizontal: 10 }}>
            <Navbar title={route.params.title} />
            <View style={{ paddingVertical: 20 }}>
                {route.params.title == "Home" && <HomeScreen temperatureData={temperatureData} luxData={luxData} humidityData={humidityData} />}
                {route.params.title == "Notification" && <NotificationScreen notificationData={notificationData} thresholdData={thresholdData} postThresholdData={postThresholdData} />}
                {route.params.title == "Controll" && <ControllScreen pumpData={pumpData} oxyData={oxyData} postPumpData={postPumpData} postOxygenData={postOxygenData} />}
            </View>
        </View>
    )
}

export default DefaultLayout