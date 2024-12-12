'use client';

import { useEffect, useState } from 'react';
import { ResponsiveLine, Line } from '@nivo/line';
import { getFeedChart } from '@/lib/feed';
import { Radio, RadioGroup } from '@headlessui/react';
import Loading from '@/app/loading';
import { Spinner } from '@nextui-org/spinner';

const filterOptions = [
  { name: 'Last 7 days', value: 7 },
  { name: 'Last 30 days', value: 30 },
  { name: 'All-time', value: 100000 },
];

const FeedChart = ({ childId }: { childId: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedChartData, setFeedChartData] = useState();
  const [filter, setFilter] = useState(filterOptions[2]);

  useEffect(() => {
    fetchFeedChart();
  }, [filter]);

  const getFilterDate = () => {
    const days = filter.value;
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString();
  };

  const fetchFeedChart = async () => {
    const feedData = await getFeedChart(childId, getFilterDate());
    setFeedChartData(feedData as any);
    setIsLoading(false);
  };

  const updateTable = async (filter: any) => {
    setIsLoading(true);
    setFilter(filter);
  };

  if (!feedChartData) {
    return <Loading />;
  }

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='px-4 py-5 sm:px-6'>
        <div>
          <div className='flex flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-semibold'>Feed Chart</h1>
            <RadioGroup
              value={filter}
              onChange={updateTable}
              className='order-last mt-2 flex grid w-full grid-cols-3 gap-3 gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:grid-cols-6 sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7'
            >
              {filterOptions.map((option) => (
                <Radio
                  key={option.name}
                  value={option}
                  className={
                    'flex cursor-pointer items-center justify-center rounded-md bg-white px-2 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus])]:[&:not([data-checked])]:ring-inset'
                  }
                >
                  {isLoading && option.name == filter.name ? (
                    <Spinner color='white' size='sm' />
                  ) : (
                    option.name
                  )}
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className='h-64 bg-gray-50'>
        <ResponsiveLine
          curve='monotoneX'
          data={feedChartData}
          margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
          xScale={{
            type: 'time',
            min: 'auto',
            max: 'auto',
          }}
          enablePoints={false}
          axisLeft={{
            legendOffset: 12,
          }}
          xFormat={'time:%b %d'}
          pointLabel='data.yFormatted'
          enableTouchCrosshair={true}
          useMesh={true}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 40,
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 4,
            format: '%b %d',
          }}
        />
      </div>
    </div>
  );
};

export default FeedChart;
