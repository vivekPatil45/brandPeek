import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import Typography from '../constants/typography';

export default function ErrorState({ message='Something went wrong.', onRetry }) {
    return (
        <View style={{ alignItems: 'center', padding: 16, marginTop: 24 }}>
            <Text style={{ color: Colors.muted, fontSize: Typography.body, textAlign: 'center' }}>{message}</Text>
            {onRetry ? (
                <TouchableOpacity
                onPress={onRetry}
                style={{
                    marginTop: 14,
                    backgroundColor: Colors.card,
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.1)',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 12
                }}
                >
                <Text style={{ color: Colors.text, fontWeight: Typography.weightMedium }}>Retry</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
}
