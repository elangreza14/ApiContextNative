import React, { useEffect, useContext, useState } from 'react'
import { View, Text, Button } from 'react-native'
import baseApi from '../APIs/baseApi'
import { ApiContext } from '../contexts/ApiContext';


const MainScreen = () => {
    const [ping, setPing] = useState(false)
    const { ApiAll, dispatch } = useContext(ApiContext)

    useEffect(() => {
        const url = ApiAll.baseapilink
        baseApi.get(url)
            .then(res => {
                console.log(res.data);
                dispatch({ type: 'RESPONSE', url: res.data })
            })
            .catch(e => {
                console.log(e);
                dispatch({ type: 'RESPONSE', url: res.data })
            });;
    }, [ping])

    const changelink1 = () => {
        dispatch({ type: 'REQUEST1' })
        setPing(!ping)
    }
    const changelink2 = () => {
        dispatch({ type: 'REQUEST2' })
        setPing(!ping)
    }
    const changelinkreset = () => {
        dispatch({ type: 'RESET' })
        setPing(!ping)
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{}}>
                <View style={{ margin: 10 }}>
                    <Button
                        onPress={() => changelink1()}
                        title="check 1"
                        color="#841584"
                        accessibilityLabel="check 1"
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Button
                        onPress={() => changelink2()}
                        title="check 2"
                        color="#841584"
                        accessibilityLabel="check 2"
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Button
                        onPress={() => changelinkreset()}
                        title="  reset  "
                        color="#841584"
                        accessibilityLabel="check reset"
                    />
                </View>
            </View>
            {ApiAll.response ? (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ margin: 10 }}>
                        <Text>response from api in context storage</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text>ID: {ApiAll.response.id}</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text>TITLE: {ApiAll.response.title}</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text>COMPLETED: {ApiAll.response.completed.toString()}</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text>USERID: {ApiAll.response.userId}</Text>
                    </View>
                </View>
            ) : null}
        </View >
    )
}

export default MainScreen

