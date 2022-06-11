import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, Image, ScrollView } from 'react-native';
import colors from '../../../constants/colors';
import { CardThree } from 'react-native-card-ui';
const Tailors = ({ navigation }) => {
    // const [users]
    const [users] = useState([
        {
            name: 'Morris Flores',
            img: 'https://randomuser.me/api/portraits/men/6.jpg',
            phone: '(814)-659-2120',
            email: 'morris.flores@example.com',
        },
        {
            name: 'Isabella Silva',
            img: 'https://randomuser.me/api/portraits/women/11.jpg',
            phone: '(452)-564-7895',
            email: 'isabella.silva@example.com',
        },
        {
            name: 'Madison Shaw',
            img: 'https://randomuser.me/api/portraits/women/40.jpg',
            phone: '(049)-352-4187',
            email: 'madison.shaw@example.com',
        },
        {
            name: 'Derrick Sims',
            img: 'https://randomuser.me/api/portraits/men/89.jpg',
            phone: '(248)-242-5309',
            email: 'derrick.sims@example.com',
        },
        {
            name: 'Michele Hayes',
            img: 'https://randomuser.me/api/portraits/women/10.jpg',
            phone: '(421)-412-5536',
            email: 'michele.hayes@example.com',
        },
    ]);
    // useEffect(() => {
    //     fetch('https://randomuser.me/api/?results=150')
    //         .then(response => response.json())
    //         .then(data => console.log(data.results))

    // });
    return (
        <View style={styles.container}>
            <ScrollView>

                {
                    users.map(item => (
                        <CardThree
                            title={item.name}
                            subTitle={item.email}
                            profile={{
                                uri:
                                    item.img
                            }}
                            icon={"star"}
                            iconColor={"grey"}
                        />
                    ))
                }
            </ScrollView >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    prefix: {
        fontWeight: '300',
        color: colors.primary,
        marginRight: 5
    },
    content: {
        fontWeight: '600',
        color: colors.primary
    }

});

export default Tailors;