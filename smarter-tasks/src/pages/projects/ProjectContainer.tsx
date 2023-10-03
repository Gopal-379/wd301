import { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { useUsersDispatch } from "../../context/members/context";
import { fetchUsers } from "../../context/members/actions";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";

const ProjectContainer = () => {
    const projectDispatch = useProjectsDispatch();
    const userDispatch = useUsersDispatch();
    useEffect(() => {
        fetchProjects(projectDispatch);
        fetchUsers(userDispatch);
    }, [projectDispatch, userDispatch]);
    return <Outlet />;
};

export default ProjectContainer;