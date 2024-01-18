import Container from "@/components/shared/Container";

const page = () => {
  return (
    <Container>
      <div
        className="
        pt-[2rem]
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        "
        >
        <h2>favorites page</h2>
      </div>
    </Container>
  )
}

export default page;
