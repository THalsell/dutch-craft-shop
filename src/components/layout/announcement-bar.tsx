import { ANNOUNCEMENT } from "@/lib/constants/site";

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white text-sm text-center py-2.5 px-4 font-medium tracking-wide">
      {ANNOUNCEMENT}
    </div>
  );
}
