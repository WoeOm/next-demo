import { GetServerSidePropsContext } from "next";

// only for nodejs runtime
export function setCache(
  res: GetServerSidePropsContext["res"],
  maxage = 12,
  revalidate = 59
) {
  console.log(1, res)
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${maxage}, stale-while-revalidate=${revalidate}`
  );
}