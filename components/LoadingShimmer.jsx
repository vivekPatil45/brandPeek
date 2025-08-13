import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

export default function LoadingShimmer({ height=80, borderRadius=18, style }) {
    const translateX = useRef(new Animated.Value(-200)).current;

    useEffect(() => {
        const loop = Animated.loop(
        Animated.sequence([
            Animated.timing(translateX, { toValue: 200, duration: 1200, useNativeDriver: true }),
            Animated.timing(translateX, { toValue: -200, duration: 0, useNativeDriver: true })
        ])
        );
        loop.start();
        return () => loop.stop();
    }, [translateX]);

    return (
        <View style={[{ overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius, height, marginBottom: 12 }, style]}>
            <Animated.View
                style={{
                width: 80,
                height: '100%',
                opacity: 0.6,
                transform: [{ translateX }],
                backgroundColor: 'rgba(255,255,255,0.15)'
                }}
            />
        </View>
    );
}
