import StatisticsItem from "@/components/StatisticsItem";

/**
 * @typedef {import("@prismicio/client").Content.StatisticsSlice} StatisticsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatisticsSlice>} StatisticsProps
 * @param {StatisticsProps}
 */
const Statistics = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} className="statistics">
      <div className="statistics_wrapper">
        {slice?.items?.map((statistic, index) => (
          <StatisticsItem
            key={index}
            number={statistic.number}
            description={statistic.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
