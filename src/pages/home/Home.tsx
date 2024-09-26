import Container from "../../components/layoutComponents/container/Container";
import Slider from "../../components/home/slider/Slider";
import DeliveryInfo from "../../components/home/deliveryInfo/DeliveryInfo";
import TopProducts from "../../components/home/popularProducts/PopularProducts";
import NewArrivals from "../../components/home/newArrivals/NewArrivals";
import BestSeller from "../../components/home/bestSellers/BestSellers";
import Grid from "../../components/layoutComponents/grid/Grid";

function Home() {
  return (
    <div>
      <Container>
        <Grid className="grid md:grid-cols-4 gap-4 !grid-cols-1 !md:grid-cols-1">
          <div className="bg-gray-100 pb-6">
            <Slider />
            <DeliveryInfo />
            <div className="mt-52 ">
              <TopProducts />
              <NewArrivals />
              <BestSeller />
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
export default Home;
