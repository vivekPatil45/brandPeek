import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/colors';
import Typography from '../constants/typography';

export default function FollowButton({ title='Follow', onPress }) {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={{ borderRadius: 14, overflow: 'hidden' }}>
            <LinearGradient
                colors={Colors.gradients.button}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ paddingVertical: 12, paddingHorizontal: 24 }}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: Typography.weightBold, textAlign: 'center' }}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
