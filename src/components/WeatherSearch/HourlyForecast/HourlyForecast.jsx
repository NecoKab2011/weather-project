import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Container } from "../../Container/Container";
import styles from "./HourlyForecast.module.scss";

export const HourlyForecast = ({ hourly, timezone }) => {
  if (!hourly) return null;

  const data = hourly.map((h) => {
    const date = new Date((h.dt + timezone) * 1000);
    const hours = String(date.getHours()).padStart(2, "0"); // 08, 09, 10...
    return {
      time: `${hours}:00`,
      temp: Math.round(h.main.temp),
    };
  });

  return (
    <section className={styles.hourly}>
      <Container>
        <h2 className={styles.hourly__title}>Hourly forecast</h2>
        <div className={styles.hourlyWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 30, right: 20, bottom: 20, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" orientation="top" />
              <YAxis width={40} />
              <Tooltip formatter={(v) => `${v}°C`} />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#FFB36C"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </section>
  );
};
