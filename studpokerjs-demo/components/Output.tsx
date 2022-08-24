import { Regular } from "components/Typography";

type OutputProps = {
  children: string;
};
export const Output: React.FC<OutputProps> = ({ children }) => {
  return <Regular>{children}</Regular>;
};
