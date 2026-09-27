import CardList, { CardTitleType } from "@/components/CardList";
import { AppAreaChart } from "@/components/charts/AppAreaChart";
import { AppBarChart } from "@/components/charts/AppBarChart";
import AppPiechart from "@/components/charts/AppPiechart";
import TodoList from "@/components/TodoList";

const Homepage = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppBarChart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <CardList title={CardTitleType.LATEST_TRANSACTION} />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <AppPiechart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <TodoList />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppAreaChart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <CardList title={CardTitleType.POPULAR_CONTENT} />
      </div>
    </div>
  );
};

export default Homepage;
