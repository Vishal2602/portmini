exports.handler = async (event, context) => {
  const { path, httpMethod, headers, body } = event;

  // Handle CORS
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  };

  // Handle preflight requests
  if (httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "",
    };
  }

  try {
    // Route handling
    if (path === "/api/health" || path === "/.netlify/functions/server/health") {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
        body: JSON.stringify({
          status: "ok",
          timestamp: new Date().toISOString(),
          environment: process.env.NODE_ENV || "production",
          version: "1.0.0",
          platform: "netlify"
        }),
      };
    }

    if (path === "/api" || path === "/.netlify/functions/server") {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
        body: JSON.stringify({
          message: "Personal Portfolio API",
          version: "1.0.0",
          platform: "netlify",
          endpoints: {
            health: "/api/health"
          }
        }),
      };
    }

    // Default 404 response
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
      body: JSON.stringify({
        error: "Not Found",
        message: `Path ${path} not found`
      }),
    };

  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
      body: JSON.stringify({
        error: "Internal Server Error",
        message: "Something went wrong"
      }),
    };
  }
}; 