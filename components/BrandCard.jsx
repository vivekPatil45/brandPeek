import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/colors';
import Typography from '../constants/typography';

export default function BrandCard({ brand, onPress, index=0 }) {
    const delay = 80 * index;
    console.log(brand);
    
    return (
        <Animatable.View animation="fadeInUp" delay={delay} useNativeDriver>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={{
                backgroundColor: Colors.card,
                borderRadius: 18,
                padding: 14,
                marginBottom: 12,
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,0.06)'
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={{ uri: brand?.logo || 'https://placehold.co/96x96/png' }}
                        style={{ width: 56, height: 56, borderRadius: 12, marginRight: 12 }}
                    />
                    <View style={{ flex: 1 }}>
                        <Text
                        numberOfLines={1}
                        style={{ color: Colors.text, fontSize: Typography.h3, fontWeight: Typography.weightMedium }}
                        >
                        {brand?.name || 'Brand'}
                        </Text>
                        <Text numberOfLines={2} style={{ color: Colors.muted, marginTop: 4 }}>
                        {brand?.tagline || brand?.description || 'Discover more about this brand.'}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animatable.View>
    );
}
