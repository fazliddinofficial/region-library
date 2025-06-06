import dayjs from "dayjs";

export const DateFormatter = ({ date }: { date?: string | Date }) => {
  return <span>{dayjs(date).format("YYYY-MM-DD HH:mm")}</span>;
};
