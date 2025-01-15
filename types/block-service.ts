export type BlockService = {
  services: Service[] | null;
  title?: string | null;
};

export type Service = {
  button_link?: string | null;
  button_text?: string | null;
  description?: string | null;
  // icon?: string | null;
  icon:
    | "it-system-house"
    | "software-development"
    | "data-logging"
    | "smart-home"
    | "security-technology"
    | "voice-over-ip";

  title?: string | null;
};
