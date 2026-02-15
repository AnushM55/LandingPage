export default (
  { title, description }: Lume.Data,
) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#667eea",
        fontSize: 32,
        fontWeight: 600,
        fontFamily: "Inter",
        color: "white",
        padding: "60px 80px",
      }}
    >
      <div
        style={{
          fontSize: "64px",
          fontWeight: 700,
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        {title}
      </div>
      {description && (
        <div
          style={{
            fontSize: "32px",
            fontWeight: 400,
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          {description}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          fontSize: "28px",
          fontWeight: 400,
        }}
      >
        anushm55
      </div>
    </div>
  );
};
