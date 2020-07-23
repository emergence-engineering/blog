import React, { FunctionComponent } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  CollectionNames,
  CollaboratorRole,
} from "../../../utils/database/types";
import SharingHeader from "../../../ui/components/Header/SharingHeader";
import { addInvitation } from "../modules/utils";
import { getSharedItemId } from "../../sharedItemView/modules/utils";
import { RootState } from "../../../utils/reducers/rootReducer";
import { getCollaborators } from "../modules/selectors";

import SharingForm, { SharingValues } from "./SharingForm";
import CollaboratorRow from "./CollaboratorRow";

const SharingSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
});

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CollabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SharingPageContainer: FunctionComponent<unknown> = () => {
  const router = useRouter();
  const sharedItemId = getSharedItemId(router);
  const uid = useSelector((state: RootState) => state.firebase.auth.uid);
  useFirestoreConnect([
    {
      collection: CollectionNames.sharedItems,
      where: [
        ["owner", "==", uid || ""],
        ["isDeleted", "==", false],
      ],
    },
  ]);
  const collaborators = useSelector(getCollaborators);
  const submit = async (values: SharingValues) => {
    await addInvitation({ ...values, sharedItemId });
  };
  return (
    <Root>
      <SharingHeader />
      <Formik
        initialValues={{
          email: "",
          role: CollaboratorRole.View,
        }}
        validationSchema={SharingSchema}
        onSubmit={submit}
      >
        {formikProps => <SharingForm {...formikProps} />}
      </Formik>
      <div>
        <h2>Collaborators</h2>
        <CollabContainer>
          {collaborators &&
            collaborators.map(item => (
              <CollaboratorRow
                key={item.key}
                userKey={item.key}
                email={item.email}
              />
            ))}
        </CollabContainer>
      </div>
    </Root>
  );
};

export default SharingPageContainer;
