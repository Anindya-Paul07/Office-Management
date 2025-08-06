const Page = ({ title }) => (
  <div>
    <h1 className="text-2xl font-semibold mb-4">{title}</h1>
    <p>This is the {title.toLowerCase()} page (content coming soon...)</p>
  </div>
);

export default () => Page({ title: "Attendance" }); 