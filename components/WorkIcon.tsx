interface WorkIconProps {
  name: string;
  className?: string;
}

export default function WorkIcon({ name, className }: WorkIconProps) {
  const renderIcon = () => {
    switch (name) {
      case 'the-kardashians':
        return (
          <>
            <path d="M 18 56 L 18 28 L 32 46 L 40 22 L 48 46 L 62 28 L 62 56 Z"/>
            <line x1="18" y1="60" x2="62" y2="60"/>
          </>
        );
      case 'project-runway':
        return (
          <>
            <path d="M 38 20 Q 38 14 42 14 Q 46 14 46 18"/>
            <path d="M 42 22 L 18 52 L 62 52 Z"/>
          </>
        );
      case 'lucy-hale':
        return (
          <path d="M 52 18 A 24 24 0 1 0 52 62 A 18 22 0 1 1 52 18 Z"/>
        );
      case 'britney-spears':
        return (
          <>
            <line x1="40" y1="14" x2="40" y2="66"/>
            <line x1="14" y1="40" x2="66" y2="40"/>
            <line x1="22" y1="22" x2="58" y2="58"/>
            <line x1="58" y1="22" x2="22" y2="58"/>
          </>
        );
      case 'aaron-paul':
        return (
          <>
            <rect x="14" y="36" width="52" height="28" rx="2"/>
            <path d="M 14 24 L 66 20 L 66 32 L 14 36 Z"/>
            <line x1="24" y1="23" x2="20" y2="34"/>
            <line x1="38" y1="22" x2="34" y2="33"/>
            <line x1="52" y1="21" x2="48" y2="32"/>
          </>
        );
      case 'coca-cola':
        return (
          <>
            <rect x="32" y="12" width="16" height="8" rx="1"/>
            <path d="M 34 22 L 34 28 Q 28 32 28 40 L 28 62 Q 28 66 32 66 L 48 66 Q 52 66 52 62 L 52 40 Q 52 32 46 28 L 46 22 Z"/>
          </>
        );
      case 'rachel-zoe':
        return (
          <>
            <circle cx="26" cy="42" r="12"/>
            <circle cx="54" cy="42" r="12"/>
            <line x1="38" y1="42" x2="42" y2="42"/>
            <line x1="14" y1="42" x2="8" y2="46"/>
            <line x1="66" y1="42" x2="72" y2="46"/>
          </>
        );
      case 'dating-rules':
        return (
          <>
            <path d="M 14 22 L 66 22 Q 70 22 70 26 L 70 52 Q 70 56 66 56 L 32 56 L 22 64 L 24 56 L 18 56 Q 14 56 14 52 Z"/>
            <path d="M 32 36 Q 32 32 36 32 Q 40 32 40 36 Q 40 32 44 32 Q 48 32 48 36 L 40 48 Z"/>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <svg
      viewBox="0 0 80 80"
      width="56"
      height="56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {renderIcon()}
    </svg>
  );
}