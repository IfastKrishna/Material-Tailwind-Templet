import {
  Avatar,
  ListItem,
  Typography,
  ListItemSuffix,
} from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { InfoCard, InfoCardItem } from "../../components/Card";

function Profile() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="w-full px-3">
      <div className=" max-w-2xl mx-auto my-6 flex flex-col gap-6">
        <div className="w-full flex flex-col">
          <Avatar src={user?.avatar} className="mx-auto" size="xl" />
          <Typography variant="h3" className="font-light text-center mt-5">
            Welcome, {user?.name}
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="text-center mt-4"
          >
            Manage your info, privacy, and security to make IFAST work better
            for you.
          </Typography>
        </div>
        {/* Basic Info */}
        <InfoCard
          infoName={"Basic info"}
          infoDescription="Some info may be visible to other people using App services."
        >
          <ListItem className="py-5 grid grid-cols-4 rounded-none">
            <Typography variant="small" className="col-span-1">
              Profile Picture
            </Typography>
            <div className="col-span-3 flex items-center">
              <Typography variant="small" className="mr-2">
                A profile picture helps personalize your account
              </Typography>
              <ListItemSuffix>
                <Avatar
                  src={user?.avatar}
                  size="md"
                  className="h-10 w-10 rounded-full"
                />
              </ListItemSuffix>
            </div>
          </ListItem>
          <InfoCardItem itemName="Name" itemValue={user?.name} />
          <InfoCardItem
            itemName="Birthdate"
            inputType="date"
            itemValue={
              user?.dateOfBirth || new Date().toISOString().slice(0, 10)
            }
            bt={1}
          />
          <InfoCardItem
            itemName={"Gender"}
            itemValue={user?.gender || "Update"}
            bt={1}
          />
        </InfoCard>
        {/* Contact info */}

        <InfoCard infoName={"Contact info"}>
          <InfoCardItem itemName={"Email"} itemValue={user?.email} />
          <InfoCardItem itemName={"Phone"} itemValue={user?.phone} bt={1} />
        </InfoCard>

        {/* Address */}
        <InfoCard
          infoName={"Addresses"}
          infoDescription="Your home and work addresses are used to personalize your experiences."
        >
          <InfoCardItem itemName={"Home"} itemValue={"Not set"} />
          <InfoCardItem
            itemName={"Work"}
            itemValue={"Sector 5, Holambi Khurd, Delhi"}
            bt={1}
          />
          <InfoCardItem itemName={"Home"} itemValue={"Not set"} bt={1} />
        </InfoCard>
      </div>
    </div>
  );
}

export default Profile;
