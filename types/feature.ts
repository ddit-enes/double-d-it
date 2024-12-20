export type ServicesTitleSection = {
  title: string;
  paragraph?: string | null;
};

export type Service = {
  title: string;
  paragraph: string;
  icon:
    | "it-system-house"
    | "software-development"
    | "data-logging"
    | "smart-home"
    | "security-technology"
    | "voice-over-ip";
};
