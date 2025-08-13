import React from 'react';
import { View, Text } from 'react-native';
import Typography from '../constants/typography.js';
import Colors from '../constants/colors.js';

export default function Header({ title='Top Brands Today', subtitle }) {
    return (
        <View style={{ marginTop: 8, marginBottom: 12 }}>
            <Text style={{ fontSize: Typography.h1, color: Colors.text, fontWeight: Typography.weightBold }}>
                {title}
            </Text>
            {subtitle ? (
                <Text style={{ fontSize: Typography.small, color: Colors.muted, marginTop: 6 }}>{subtitle}</Text>
            ) : null}
        </View>
    );
}
