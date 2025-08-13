import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import GradientBackground from "@/components/GradientBackground";
import FollowButton from "@/components/FollowButton";
import Colors from "@/constants/colors";
import Typography from "@/constants/typography";
import ErrorState from "@/components/ErrorState";
import LoadingShimmer from "@/components/LoadingShimmer";
import { useRoute } from "@react-navigation/native";
import { getBrandById } from "@/services/api";

export default function BrandDetailScreen() {
  const route = useRoute();
  const { id } = route.params || {};
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    const { data, error } = await getBrandById(id);
    if (error) setError(error);
    setBrand(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!id) {
      setError("No brand ID provided");
      setLoading(false);
      return;
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <GradientBackground colors={Colors.gradients.detail}>
        <LoadingShimmer height={140} />
        <LoadingShimmer height={90} />
        <LoadingShimmer height={220} />
      </GradientBackground>
    );
  }

  if (!brand) {
    return (
      <GradientBackground colors={Colors.gradients.detail}>
        <ErrorState
          message={error || "Brand not found."}
          onRetry={() => {
            setLoading(true);
            setError(null);
            setBrand(null);
            fetchData();
          }}
        />
      </GradientBackground>
    );
  }

  return (
    <GradientBackground colors={Colors.gradients.detail}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        {/* Brand Header */}
        <View style={{ alignItems: "center", marginTop: 20, marginBottom: 24 }}>
          <Image
            source={{ uri: brand.logo || "https://placehold.co/160/png" }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 30,
              marginBottom: 14,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderWidth: 2,
              borderColor: "rgba(255,255,255,0.1)",
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: Typography.h1,
              fontWeight: Typography.weightBold,
              textAlign: "center",
            }}
          >
            {brand.name || "Brand"}
          </Text>
          {!!brand.description && (
            <Text
              style={{
                color: "#d1d5db",
                marginTop: 8,
                textAlign: "center",
                fontSize: Typography.body,
                maxWidth: 300,
              }}
            >
              {brand.description}
            </Text>
          )}
        </View>

        {/* Info Card */}
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            padding: 20,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.12)",
            marginBottom: 24,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 3 },
            elevation: 3,
          }}
        >
          <Text
            style={{
              color: "#f1f5f9",
              lineHeight: 24,
              fontSize: Typography.body,
            }}
          >
            {brand.fullDescription || "No details provided."}
          </Text>
        </View>

        {/* Website Button */}
        {!!brand.website && (
          <TouchableOpacity
            onPress={() => Linking.openURL(brand.website)}
            style={{
              backgroundColor: "#3b82f6",
              paddingVertical: 14,
              borderRadius: 14,
              alignItems: "center",
              marginBottom: 24,
              shadowColor: "#3b82f6",
              shadowOpacity: 0.3,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },
              elevation: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Visit Website
            </Text>
          </TouchableOpacity>
        )}

        {/* Follow Button */}
        <FollowButton onPress={() => {}} />
      </ScrollView>
    </GradientBackground>
  );
}
