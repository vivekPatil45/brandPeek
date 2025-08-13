import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import GradientBackground from "@/components/GradientBackground";
import FollowButton from "@/components/FollowButton";
import Colors from "@/constants/colors";
import Typography from "@/constants/typography";
import ErrorState from "@/components/ErrorState";
import LoadingShimmer from "@/components/LoadingShimmer";
import brandsData from "@/constants/brands.js";
import { useRoute } from "@react-navigation/native";

export default function BrandDetailScreen( ) {
   const route = useRoute();
  console.log(route);
  
  const { id } = route.params || {};
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      const foundBrand = brandsData.find((b) => b.id === id);
      setBrand(foundBrand || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <GradientBackground colors={Colors.gradients.detail}>
        <LoadingShimmer height={120} />
        <LoadingShimmer height={80} />
        <LoadingShimmer height={200} />
      </GradientBackground>
    );
  }

  if (!brand) {
    return (
      <GradientBackground colors={Colors.gradients.detail}>
        <ErrorState
          message="Brand not found."
          onRetry={() => {}}
        />
      </GradientBackground>
    );
  }

  return (
    <GradientBackground colors={Colors.gradients.detail}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", marginTop: 8, marginBottom: 16 }}>
          <Image
            source={{ uri: brand.logo || "https://placehold.co/160/png" }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 24,
              marginBottom: 12,
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: Typography.h1,
              fontWeight: Typography.weightBold,
            }}
          >
            {brand.name || "Brand"}
          </Text>
          {!!brand.tagline && (
            <Text style={{ color: "#d1d5db", marginTop: 6 }}>
              {brand.tagline}
            </Text>
          )}
        </View>

        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            padding: 16,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.08)",
            marginBottom: 16,
          }}
        >
          <Text style={{ color: "#cbd5e1", lineHeight: 22 }}>
            {brand.fullDescription ||
              brand.description ||
              "No details provided."}
          </Text>
        </View>

        <FollowButton onPress={() => {}} />
        <View style={{ height: 28 }} />
      </ScrollView>
    </GradientBackground>
  );
}
