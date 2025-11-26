import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

export default function BreakdownBarChart() {
  const data = [
    { platform: "Instagram", value: 34921, color: "#E1306C" },
    { platform: "Facebook", value: 12540, color: "#1877F2" },
    { platform: "WhatsApp", value: 1204, color: "#25D366" },
    { platform: "Google", value: 98200, color: "#DB4437" },
  ];

  return (
    <div className="bg-[#0E0E0F] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-lg mt-0">
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
        Clicks / Views Breakdown
      </h2>

      <div className="w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            barSize={40}
            margin={{ top: 20, right: 10, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />

            <XAxis
              dataKey="platform"
              tick={{ fill: "#aaa", fontSize: 12 }}
              stroke="#555"
              angle={-45}
              textAnchor="end"
              height={60}
            />

            <YAxis
              tick={{ fill: "#aaa", fontSize: 12 }}
              stroke="#555"
              width={50}
            />

            <Tooltip
              cursor={{ fill: "#222" }}
              contentStyle={{
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "10px",
                fontSize: "14px",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#ddd" }}
            />

            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
              background={{ fill: "#1a1a1a" }}
              label={{
                position: "top",
                fill: "#fff",
                fontSize: 11,
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}