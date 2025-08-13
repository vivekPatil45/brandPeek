import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import Colors from '../constants/colors.js';

export default function GradientBackground({ children, colors = Colors.gradients.home }) {
    return (
        <LinearGradient colors={colors} start={{x:0,y:0}} end={{x:1,y:1}} style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 18 }}>
                {children}
            </View>
        </LinearGradient>
    );
}
