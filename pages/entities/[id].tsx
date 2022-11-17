import { useRouter } from "next/router";

export async function getServerSideProps() {
  // Pass data to the page via props
  return { props: { { test: "message"} } }
}

const Entity = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Entity: {id}</p>;
};

export default Entity;
