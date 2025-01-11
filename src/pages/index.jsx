import CountriesList from "../components/CountriesList";
import { useGetCountriesQuery } from "@/store/countries";

export default function Home() {
  const { data: countries, isLoading, error } = useGetCountriesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <main>
      <CountriesList countries={countries} />
    </main>
  );
}
