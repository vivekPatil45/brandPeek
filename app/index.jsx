import { RefreshControl, ScrollView } from "react-native";
import GradientBackground from "../components/GradientBackground";
import colors from "@/constants/colors";
import Header from "@/components/Header";
import ErrorState from "@/components/ErrorState";
import LoadingShimmer from "@/components/LoadingShimmer";
import BrandCard from "@/components/BrandCard";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { getBrands } from "@/services/api"

export default function Index() {
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    setError(null);
    const { data, error } = await getBrands();
    if (error) setError(error);
    setBrands(data?.slice(0, 10) || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData(); 
    setRefreshing(false);
  }, []);

  return (
    <GradientBackground colors={colors.gradients.home}>
      <Header
        title="Top Brands Today"
        subtitle="Discover trending brands at a glance"
      />

      {loading ? (
        <>
          {Array.from({ length: 4 }).map((_, i) => (
            <LoadingShimmer key={i} />
          ))}
        </>
      ) : error ? (
        <ErrorState
          message="Unable to load brands. Check your internet or API URL."
          onRetry={() => console.log("Retry")}
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#fff"
            />
          }
        >
          {brands.map((b, i) => (
            <BrandCard
              key={b.id || i}
              brand={b}
              index={i}
              onPress={() => router.push(`/brand/${b.id}`)}
            />
          ))}
        </ScrollView>
      )}
    </GradientBackground>
  );
}
