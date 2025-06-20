import Image from 'next/image';

export default function UserCard({ user }) {
  const { image, firstName, lastName, company, university, email, phone } =
    user;

  return (
    <div className="p-4 h-[162px] border border-neutral-800 bg-neutral-900 rounded-2xl shadow mb-4 flex gap-4 items-center">
      <Image
        className="w-18 h-18 rounded-full object-cover"
        src={image}
        alt={firstName}
        width={500}
        height={500}
      />
      <div>
        <p className="text-lg font-semibold text-neutral-50 line-clamp-1">
          {firstName} {lastName}
        </p>
        <p className="text-sm text-indigo-500 mb-1 line-clamp-1">
          {company.title}
        </p>
        <p className="text-sm text-neutral-500 line-clamp-1">{university}</p>
        <p className="text-sm text-neutral-500 line-clamp-1">{email}</p>
        <p className="text-sm text-neutral-500 line-clamp-1">{phone}</p>
      </div>
    </div>
  );
}
