import { GetServerSideProps } from "next";

type HomeProps = {
  data: string;
};

export default function Home({ data }: HomeProps) {
  return (
    <div>
      <p>{data}</p>
      <h1>Bug repro</h1>
      <p>
        If you start this project with <code>npm run dev</code> or{" "}
        <code>npm run build && npm run start</code>, then it will work just
        fine. If you instead start it with <code>npm run fastly-serve</code> (or
        decide to publish it), it will not show anything beacuse{" "}
        <code>DocumentContext</code> will be <code>undefined</code>
      </p>
      <p>
        However, if you remove the <code>getServerSideProps</code>, it will work
        in Fastly.
      </p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      data: "Breaks in Fastly",
    },
  };
};
