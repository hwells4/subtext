"use client"

function AvatarsDemo() {
  return (
    <div className="border-border bg-background flex items-center rounded-full border p-1 shadow shadow-black/5">
      <div className="flex -space-x-1.5">
        <img
          className="ring-background rounded-full ring-1"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="ring-background rounded-full ring-1"
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="ring-background rounded-full ring-1"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="ring-background rounded-full ring-1"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="text-muted-foreground px-2 text-xs">
        Trusted by <strong className="text-foreground font-medium">300+</strong>{" "}
        marketers.
      </p>
    </div>
  )
}

export { AvatarsDemo }
