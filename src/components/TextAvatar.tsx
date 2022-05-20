type Props = {
  fullname?: string;
};

export default function TextAvatar({ fullname }: Props) {
  const names = fullname?.trim().split(' ');
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-green-500 h-8 w-8">
      <span className="font-medium leading-none text-white">
        {`${names[0][0]}`.toUpperCase()}
        {names.length > 1 && `${names[names.length - 1][0]}`.toUpperCase()}
      </span>
    </span>
  );
}
