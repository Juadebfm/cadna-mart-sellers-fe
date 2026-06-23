export default function SupportHours() {
  const hours = [
    { day: "Monday – Friday", time: "9:00am – 6:00pm WAT" },
    { day: "Saturday", time: "10:00am – 2:00pm WAT" },
    { day: "Sunday & Public holidays", time: "Closed" },
  ];

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5 space-y-4">
      <p className="text-[18px] font-semibold text-[#5D5FEF] mb-4 border-b pb-3 border-[#E5E7EB]">
        Support hours
      </p>

      <div className="space-y-3">
        {hours.map((row) => (
          <div key={row.day} className="flex items-center justify-between gap-2 border-b pb-3 border-[#E5E7EB] ">
            <p className="text-[14px] text-[#696A7A]">{row.day}</p>
            <p
              className={`text-[16px] font-medium ${
                row.time === "Closed" ? "text-[#9899A3]" : "text-[#4C4D60]"
              }`}
            >
              {row.time}
            </p>
          </div>
        ))}
      </div>

      {/* Info banner */}
      <div className="bg-[#EFEFFD] rounded-lg px-4 py-2.5">
        <p className="text-[12px] text-[#5556D9]">
          For urgent order or delivery issues, WhatsApp is your fastest channel.
        </p>
      </div>
    </div>
  );
}