const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Order */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const {
        dateOfDelivery,
        trackingNumber,
        deliveredProcessing,
        userId,
        items,
      } = req.body;
      const Order = await prisma.Order.create({
        data: {
          dateOfDelivery,
          trackingNumber,
          deliveredProcessing,
          userId,
          items,
        },
      });

      return res.status(201).json({ Order });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Order" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Orders */
const GET = async (req, res) => {
  try {
    const Orders = await prisma.Order.findMany();
    return res.status(200).json(Orders);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Orders", error: message });
  }
};

/*GET Article By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Order = await prisma.Order.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Order));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Order", error: message }),
      { status: 500 }
    );
  }
};
/*UPDATE Order*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedOrder = await prisma.Order.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedOrder));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Order", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Order */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Order.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Order deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Order", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
