const Features = ({ features }) => {
  return (
    <ul>
      {features.map((feature, i) => (
        <li key={i} className="list-disc">
          {feature}
        </li>
      ))}
    </ul>
  );
};
export default Features;
