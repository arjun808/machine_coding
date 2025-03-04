interface ErrorProps {
  error: string | undefined;
}
const Error = ({ error }: ErrorProps) => {
  return <p className="text-red-900">{error}</p>;
};
export default Error;
