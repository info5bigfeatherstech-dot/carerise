import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Bird,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Heart,
  Leaf,
  Menu,
  PawPrint,
  ShieldCheck,
  Sparkles,
  TreePine,
  UsersRound,
  X,
  HandHeart,
  House,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const icons = {
  "arrow-down-right": ArrowDownRight,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  bird: Bird,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  droplets: Droplets,
  heart: Heart,
  leaf: Leaf,
  menu: Menu,
  paw: PawPrint,
  shield: ShieldCheck,
  sparkles: Sparkles,
  tree: TreePine,
  users: UsersRound,
  close: X,
  "hand-heart": HandHeart,
  home: House,
  mail: Mail,
  phone: Phone,
  pin: MapPin,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
};

/** Renders a consistent lucide icon using the shared icon vocabulary. */
export default function Icon({ name, className = "h-5 w-5", ...props }) {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent aria-hidden="true" className={className} strokeWidth={1.8} {...props} />;
}
