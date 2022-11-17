import { useRouter } from "next/router";

export async function getServerSideProps() {
  // Pass data to the page via props
  console.log("🚀 SSR EXAMPLE")
  return { props: { data: { test: "message" } } }
}

const Entity = ({ data}) => {
  console.log("🚀 data from SSR", data)
  const router = useRouter();
  const { id } = router.query;

  return <p>Entity: {id}</p>;
};

export default Entity;
